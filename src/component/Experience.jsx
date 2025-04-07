'use client'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { Table1 } from './Table_1'
import {Table2} from './Table_2'
import { Chair1 } from './Chair_1'
import { Chair2 } from './Chair_2'
import { AccumulativeShadows, RandomizedLight, useTexture} from '@react-three/drei'
import { configurationData } from '@/store/configurationData'
import { ConfigAtom, ConfigTableTextureAtom, ConfigChairTextureAtom } from '@/store/configAtom'
import { useRecoilState, useRecoilValue } from 'recoil'

function CustomModel() {
    const [currentConfig, setCurrentConfig] = useRecoilState(ConfigAtom)
    const currentTableTexture = useRecoilValue(ConfigTableTextureAtom)
    const currentChairTexture = useRecoilValue(ConfigChairTextureAtom)


    const currTableTexture = useTexture({
        map: configurationData.texture.table[currentTableTexture].base_color,
        normalMap:configurationData.texture.table[currentTableTexture].normal,
        roughnessMap: configurationData.texture.table[currentTableTexture].roughness,
        aoMap: configurationData.texture.table[currentTableTexture].ambient_occlusion
    });


    const currChairTexture =  useTexture({
        map: configurationData.texture.chair[currentChairTexture].base_color,
        normalMap:configurationData.texture.chair[currentChairTexture].normal,
        roughnessMap: configurationData.texture.chair[currentChairTexture].roughness,
        aoMap: configurationData.texture.chair[currentChairTexture].ambient_occlusion
    });

    switch(currentConfig) {
        case 0:
            return(<>
            <group>
                <Table2 mainProps={{}} textureProps={currTableTexture} />
                <Chair2 mainProps={{ position:[1, 0, -1.7] ,rotation:[0, Math.PI * 0.150, 0 ]}} textureProps={currChairTexture} />

                <Chair2 mainProps={{position:[-1.1, 0, -1.7],rotation:[0, Math.PI * 0.150, 0 ]  }} textureProps={currChairTexture} />

                <Chair2 mainProps={{position:[1, 0, 1.7],rotation:[0, (Math.PI * 0.150) + 3.14, 0 ]}} textureProps={currChairTexture}   />

                <Chair2 mainProps={{position:[-1.1, 0, 1.7],rotation:[0, (Math.PI * 0.150) + 3.14, 0 ]}} textureProps={currChairTexture}   />


                <AccumulativeShadows temporal frames={100} color={'#000000'} opacity={0.4}>
          <RandomizedLight radius={10} position={[10, 10, -5]} />
        </AccumulativeShadows>
        </group>
            </>)
        case 1:
            return(<>
            <group>
                <Table1 mainProps={{}} textureProps={currTableTexture} />

                <Chair1 mainProps={{position:[-1, 1.2, 0.6], rotation:[0, Math.PI/2, 0]}} textureProps={currChairTexture}   />

                <Chair1 mainProps={{position:[-3, 1.2, 0.6],rotation:[0, Math.PI/2, 0]}}   textureProps={currChairTexture} />

                <Chair1 mainProps={{position:[-1+4, 1.2, -0.6], rotation:[0, -Math.PI/2, 0] }}  textureProps={currChairTexture}  />

                <Chair1 mainProps={{position:[-3+4, 1.2, -0.6],rotation:[0, -Math.PI/2, 0]}}   textureProps={currChairTexture} />

                <AccumulativeShadows temporal frames={100} color={'#000000'} opacity={0.4}>
          <RandomizedLight radius={10} position={[10, 10, -5]} />
        </AccumulativeShadows>
        </group>
            </>)
        case 2:
            return (<>
            <group>
                <Table1 mainProps={{}} textureProps={currTableTexture}  />

                <Chair2 mainProps={{ position:[1, 0, -1.7] ,rotation:[0, Math.PI * 0.150, 0 ]}} textureProps={currChairTexture} />

                <Chair2 mainProps={{position:[-1.1, 0, -1.7],rotation:[0, Math.PI * 0.150, 0 ]  }} textureProps={currChairTexture} />

                <Chair2 mainProps={{position:[1, 0, 1.7],rotation:[0, (Math.PI * 0.150) + 3.14, 0 ]}} textureProps={currChairTexture}   />

                <Chair2 mainProps={{position:[-1.1, 0, 1.7],rotation:[0, (Math.PI * 0.150) + 3.14, 0 ]}} textureProps={currChairTexture}   />

                <AccumulativeShadows temporal frames={100} color={'#000000'} opacity={0.4}>
          <RandomizedLight radius={10} position={[10, 10, -5]} />
        </AccumulativeShadows>
        </group>
            </>)
        default:
            return(<>
            <group>
                <Table2 mainProps={{}} textureProps={currTableTexture} />

                <Chair1 mainProps={{position:[-1, 1.2, 0.6], rotation:[0, Math.PI/2, 0]}} textureProps={currChairTexture} />

                <Chair1 mainProps={{position:[-3, 1.2, 0.6],rotation:[0, Math.PI/2, 0]}}   textureProps={currChairTexture} />

                <Chair1 mainProps={{position:[-1+4, 1.2, -0.6], rotation:[0, -Math.PI/2, 0] }}  textureProps={currChairTexture}  />

                <Chair1 mainProps={{position:[-3+4, 1.2, -0.6],rotation:[0, -Math.PI/2, 0]}}  textureProps={currChairTexture}  />
                <AccumulativeShadows temporal frames={100} color={'#000000'} opacity={0.4}>
          <RandomizedLight radius={10} position={[10, 10, -5]} />
        </AccumulativeShadows>
        </group>

            </>)
    }
}

export default function Experience() {

    return (
        <>
        <mesh rotation={[-90*3.14/180, 0 , 0]} visible={false} receiveShadow >
            <planeGeometry args={[20, 21, 64, 64]}/>
            <meshBasicMaterial  color={'white'}/>
        </mesh>
        {/* <Table2 />
        <Chair2 position={[1, 0, -1.7]} rotation={[0, Math.PI * 0.150, 0 ]}  />
        <Chair2 position={[-1.1, 0, -1.7]} rotation={[0, Math.PI * 0.150, 0 ]}  />
        <Chair2 position={[1, 0, 1.7]} rotation={[0, (Math.PI * 0.150) + 3.14, 0 ]}  />
        <Chair2 position={[-1.1, 0, 1.7]} rotation={[0, (Math.PI * 0.150) + 3.14, 0 ]}  /> */}
        {/* <Chair2 position={[-3, 1.2, 0.6]} rotation={[0, Math.PI/2, 0]} />
        <Chair2 position={[-1+4, 1.2, -0.6]} rotation={[0, -Math.PI/2, 0]}  />
        <Chair2 position={[-3+4, 1.2, -0.6]} rotation={[0, -Math.PI/2, 0]} /> */}
        <CustomModel />


        

        
        </>

        
    )
}