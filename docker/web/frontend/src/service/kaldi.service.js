const config = {
    sdpSemantics: 'unified-plan'
};

const negotiate = (peer) => {
    return peer.createOffer().then((offer) => {
        return peer.setLocalDescription(offer);
    }).then(() => {
        return new Promise((resolve) => {
            if (peer.iceGatheringState === 'complete') {
                resolve();
            } else {
                function checkState() {
                    if (peer.iceGatheringState === 'complete') {
                        peer.removeEventListener('icegatheringstatechange', checkState);
                        resolve();
                    }
                }
                peer.addEventListener('icegatheringstatechange', checkState);
            }
        });
    }).then(() => {
        let offer = peer.localDescription;
        console.log(offer.sdp);
        return fetch('/offer', {
            body: JSON.stringify({
                sdp: offer.sdp,
                type: offer.type,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });
    }).then((response) => {
        return response.json();
    }).then((answer) => {
        console.log(answer.sdp);
        return peer.setRemoteDescription(answer);
    }).catch((e) => {
        console.log(e);
    });
}

export const startVoice = (setP, setDc, setMessage) => {
    let dcInterval = null
    let globalMessage = [];
    let timelimit = 2
    const peer = new RTCPeerConnection(config)
    setP(peer)
    let param = {}
    const cD = peer.createDataChannel('chat', param)
    setDc(cD)
    cD.onclose = () => {
        clearInterval(dcInterval)
        console.log('Closed data channel');
        // console.log(globalMessage)
        // console.log(globalMessage.length - 1)
        setMessage(globalMessage[globalMessage.length - 1])
    }

    cD.onopen = () => {
        console.log('Opened data channel');
    }
    cD.onmessage = (evt) => {
        // console.log(evt.data.trim())
        if (timelimit !== 0) {
            if (evt.data.trim() !== "") {
                globalMessage.push(evt.data);
                setMessage(globalMessage[globalMessage.length - 1])
                timelimit = 2
            } else {
                timelimit = timelimit - 1
            }
        } else {
            stopVoice(peer)
        }
    };

    peer.oniceconnectionstatechange = () => {
        if (peer.iceConnectionState === 'disconnected') {
            console.log('Disconnected');
        }
    }

    const constraints = {
        audio: true,
        video: false
    };

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        stream.getTracks().forEach((track) => {
            peer.addTrack(track, stream);
        });
        return negotiate(peer);
    }, (err) => {
        console.log('Could not acquire media: ' + err);
    });


}

export const stopVoice = (peer, dc) => {

    // close data channel
    if (dc) {
        dc.close();
    }

    // close transceivers
    if (peer.getTransceivers) {
        peer.getTransceivers().forEach((transceiver) => {
            if (transceiver.stop) {
                transceiver.stop();
            }
        });
    }

    // close local audio / video
    peer.getSenders().forEach((sender) => {
        sender.track.stop();
    });

    // close peer connection
    setTimeout(() => {
        peer.close();
    }, 500);
}