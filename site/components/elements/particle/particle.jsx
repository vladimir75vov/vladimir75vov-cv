import Particles from "react-tsparticles";
import {useCallback} from "react";
import {loadFull} from "tsparticles";

const Particle = ({children}) => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: {
                        enable: true,
                        zIndex: 0
                    },
                    detectRetina: true,
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push"
                            },
                            onDiv: {
                                elementId: "repulse-div",
                                enable: false,
                                mode: "repulse"
                            },
                            onHover: {
                                enable: true,
                                mode: "bubble",
                                parallax: {
                                    enable: false,
                                    force: 60,
                                    smooth: 10
                                }
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 2
                            },
                            connect: {
                                distance: 80,
                                lineLinked: {
                                    opacity: 0.5
                                },
                                radius: 60
                            },
                            grab: {
                                distance: 400,
                                lineLinked: {
                                    opacity: 1
                                }
                            },
                            push: {
                                quantity: 2
                            },
                            remove: {
                                quantity: 2
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: "#ffffff"
                        },
                        lineLinked: {
                            blink: false,
                            color: "#000",
                            consent: false,
                            distance: 150,
                            enable: false,
                            opacity: 0.4,
                            width: 1
                        },
                        move: {
                            attract: {
                                enable: false,
                                rotate: {
                                    x: 600,
                                    y: 1200
                                }
                            },
                            bounce: false,
                            direction: "none",
                            enable: true,
                            outMode: "out",
                            random: false,
                            speed: 2,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            limit: 20,
                            value: 15
                        },
                        opacity: {
                            animation: {
                                enable: true,
                                minimumValue: 0.2,
                                speed: 1,
                                sync: false
                            },
                            random: true,
                            value: 1
                        },
                        rotate: {
                            animation: {
                                enable: true,
                                speed: 5,
                                sync: false
                            },
                            direction: "random",
                            random: true,
                            value: 0
                        },
                        shape: {
                            character: {
                                fill: false,
                                font: "Verdana",
                                style: "",
                                value: "*",
                                weight: "400"
                            },
                            image: [
                                {
                                    src: "https://i.postimg.cc/63ZSRTPj/bootstrap-icon.png",
                                    width: 20,
                                    height: 20
                                }, {
                                    src: "https://i.postimg.cc/SR7vT3kc/css-icon.png",
                                    width: 20,
                                    height: 20
                                }, {
                                    src: "https://i.postimg.cc/ryS3w0xz/firebase-icon.png",
                                    width: 20,
                                    height: 20
                                }, {
                                    src: "https://i.postimg.cc/FsNqdrVp/github.png",
                                    width: 20,
                                    height: 20
                                }, {
                                    src: "https://i.postimg.cc/8P4YL2yS/html-icon.png",
                                    width: 20,
                                    height: 20
                                }, {
                                    src: "https://i.postimg.cc/kghhpx3Y/js-icon.png",
                                    width: 20,
                                    height: 20
                                }, {
                                    src: "https://i.postimg.cc/25bXRVCk/kotlin-icon.png",
                                    width: 20,
                                    height: 20
                                }, {
                                    src: "https://i.postimg.cc/Dz9p2nzq/linux-icon.png",
                                    width: 20,
                                    height: 20
                                }, {
                                    src: "https://i.postimg.cc/NMRJFSyZ/mysql-icon.png",
                                    width: 20,
                                    height: 20
                                }, {
                                    src: "https://i.postimg.cc/x8Ysz5M8/net-core-icon.png",
                                    width: 20,
                                    height: 20
                                }, {
                                    src: "https://i.postimg.cc/qqL1XKxL/net-framework-icon.png",
                                    width: 20,
                                    height: 20
                                }, {
                                    src: "https://i.postimg.cc/pVYcHNMF/node-icon.png",
                                    width: 20,
                                    height: 20
                                }, {
                                    src: "https://i.postimg.cc/Yqrn2Xty/python-icon.png",
                                    width: 20,
                                    height: 20
                                }, {
                                    src: "https://i.postimg.cc/c4FDvQH1/react-icon.png",
                                    width: 20,
                                    height: 20
                                }, {
                                    src: "https://i.postimg.cc/rwzfxK01/sass-icon.png",
                                    width: 20,
                                    height: 20
                                }, {
                                    src: "https://i.postimg.cc/s2hKHqJ1/typescript-icon.png",
                                    width: 20,
                                    height: 20
                                }, {
                                    src: "https://i.postimg.cc/Y9BR5RXR/vscode-icon.png",
                                    width: 20,
                                    height: 20
                                }, {
                                    src: "https://i.postimg.cc/Jn3xMXvL/vue-icon.png",
                                    width: 20,
                                    height: 20
                                }, {
                                    src: "https://i.postimg.cc/T1R9wwvW/wordpress-icon.png",
                                    width: 20,
                                    height: 20
                                }, {
                                    src: "https://i.postimg.cc/tgmQFYzW/C-Sharp-icon.png",
                                    width: 20,
                                    height: 20
                                }, {
                                    src: "https://i.postimg.cc/ydgqjsf5/java-icon.png",
                                    width: 20,
                                    height: 20
                                }, {
                                    src: "https://i.postimg.cc/bJK7FWWv/sql-server-icon-transformed.png",
                                    width: 20,
                                    height: 20
                                }

                            ],
                            polygon: {
                                sides: 5
                            },
                            stroke: {
                                color: "#000000",
                                width: 0
                            },
                            type: "image"
                        },
                        size: {
                            animation: {
                                enable: false,
                                minimumValue: 0.1,
                                speed: 40,
                                sync: false
                            },
                            random: false,
                            value: 16
                        }
                    },
                    polygon: {
                        draw: {
                            enable: false,
                            lineColor: "#ffffff",
                            lineWidth: 0.5
                        },
                        move: {
                            radius: 10
                        },
                        scale: 1,
                        url: ""
                    },
                    background: {
                        image: "",
                        position: "50% 50%",
                        repeat: "no-repeat",
                        size: "cover"
                    }
                }}
            />
        </>
    )
}

export {Particle}