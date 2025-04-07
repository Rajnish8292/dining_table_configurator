

export const configurationData = {
    configuration : {
        0: {
            chair : {
                0: {
                    position: [-1, 1.2, 0.6],
                    rotation: [0, Math.PI/2, 0]
                },
                1: {
                    position: [-3, 1.2, 0.6],
                    rotation: [0, Math.PI/2, 0]
                },
                2: {
                    position: [-1+4, 1.2, -0.6],
                    rotation: [0, -Math.PI/2, 0]
                },
                3: {
                    position: [-3+4, 1.2, -0.6],
                    rotation: [0, -Math.PI/2, 0]
                }
            },
            price: 15000
        },
        1: {
            chair : {
                0: {
                    position: [-1, 1.2, 0.6],
                    rotation: [0, Math.PI/2, 0]
                },
                1: {
                    position: [-3, 1.2, 0.6],
                    rotation: [0, Math.PI/2, 0]
                },
                2: {
                    position: [-1+4, 1.2, -0.6],
                    rotation: [0, -Math.PI/2, 0]
                },
                3: {
                    position: [-3+4, 1.2, -0.6],
                    rotation: [0, -Math.PI/2, 0]
                }
            },

            price: 18000
        },
        2: {
            chair : {
                0: {
                    position: [1, 0, -1.7],
                    rotation: [0, Math.PI * 0.150, 0 ]
                },
                1: {
                    position: [-1.1, 0, -1.7],
                    rotation: [0, Math.PI * 0.150, 0 ]
                },
                2: {
                    position: [1, 0, 1.7],
                    rotation: [0, (Math.PI * 0.150) + 3.14, 0 ]
                },
                3: {
                    position: [-1.1, 0, 1.7],
                    rotation: [0, (Math.PI * 0.150) + 3.14, 0 ]
                }
            },

            price: 12000
        },
        3: {
            chair : {
                0: {
                    position: [1, 0, -1.7],
                    rotation: [0, Math.PI * 0.150, 0 ]
                },
                1: {
                    position: [-1.1, 0, -1.7],
                    rotation: [0, Math.PI * 0.150, 0 ]
                },
                2: {
                    position: [1, 0, 1.7],
                    rotation: [0, (Math.PI * 0.150) + 3.14, 0 ]
                },
                3: {
                    position: [-1.1, 0, 1.7],
                    rotation: [0, (Math.PI * 0.150) + 3.14, 0 ]
                }
            },

            price: 10000
        },
    },

    texture:{

        table: {
            0: {
                ambient_occlusion: '/wood_texture1/ambientOcclusion.jpg',
                base_color: '/wood_texture1/basecolor.jpg',
                height: '/wood_texture1/height.jpg',
                normal: '/wood_texture1/normal.jpg',
                roughness: '/wood_texture1/roughness.jpg',
                price: 1000
            },
            1 : {
                ambient_occlusion: '/wood_texture2/ambientOcclusion.jpg',
                base_color: '/wood_texture2/basecolor.jpg',
                height: '/wood_texture2/height.jpg',
                normal: '/wood_texture2/normal.jpg',
                roughness: '/wood_texture2/roughness.jpg' ,
                price: 1200
            }
        },

        chair: {
            0: {
                ambient_occlusion: '/fabric_texture1/ambientOcclusion.png',
                base_color: '/fabric_texture1/basecolor.png',
                height: '/fabric_texture1/height.png',
                normal: '/fabric_texture1/normal.png',
                roughness: '/fabric_texture1/roughness.png',
                price: 800 
            },

            1: {
                ambient_occlusion: '/fabric_texture2/ambientOcclusion.jpg',
                base_color: '/fabric_texture2/basecolor.jpg',
                height: '/fabric_texture2/height.jpg',
                normal: '/fabric_texture2/normal.jpg',
                roughness: '/fabric_texture2/roughness.jpg' ,
                price: 900
            },

            2: {
                ambient_occlusion: '/fabric_texture3/ambientOcclusion.jpg',
                base_color: '/fabric_texture3/basecolor.jpg',
                height: '/fabric_texture3/height.jpg',
                normal: '/fabric_texture3/normal.jpg',
                roughness: '/fabric_texture3/roughness.jpg' ,
                price: 700
            },
        }

    }
}