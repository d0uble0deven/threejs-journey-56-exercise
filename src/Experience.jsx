import { useRef } from 'react'
import { MeshReflectorMaterial, Float, Text, Html, PivotControls, TransformControls, OrbitControls } from "@react-three/drei"

export default function Experience() {

    const cube = useRef()
    const sphere = useRef()

    return <>

    <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

    <PivotControls anchor={ [0,0,0] } depthTest={ false } >
        <mesh ref={ sphere } position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
            <Html position={ [ 1, 1, 0 ] } wrapperClass="label" center distanceFactor={ 6 } occlude={ [sphere, cube] }>That's a sphere!</Html>

        </mesh>
    </ PivotControls>

    {/* <TransformControls position-x={ 2 } > */}
        {/* <mesh scale={ 1.5 }> */}
        <mesh ref={ cube } position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
    {/* </ TransformControls> */}
    <TransformControls object={ cube } mode="translate" />

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <MeshReflectorMaterial     
                resolution={ 512 }
                blur={ [ 100000, 100000 ] }
                mixBlur={ 10 }
                mirror={ 0.15 }
                color="cornflowerblue"
            />
            {/* <meshStandardMaterial color="greenyellow" /> */}
        </mesh>

    <Float speed={ 5 } floatIntensity={ 2 } floatingRange={ 2 }>
        <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={ 1 }
            color="salmon"
            position-y={ 2 }
            maxWidth={ 2 }
            textAlign="center"
            >
            This is built in R3F
        </Text>
    </Float>

    </>
}