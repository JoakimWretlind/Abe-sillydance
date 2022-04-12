import { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Abe({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/abedance2.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    // console.log(actions) if you are unsur what your animation is named
    actions.dance.play()
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.mixamorigHips} />
      <primitive object={nodes.Ctrl_Master} />
      <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
      <primitive object={nodes.Ctrl_Hand_IK_Left} />
      <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
      <primitive object={nodes.Ctrl_Hand_IK_Right} />
      <primitive object={nodes.Ctrl_Foot_IK_Left} />
      <primitive object={nodes.Ctrl_LegPole_IK_Left} />
      <primitive object={nodes.Ctrl_Foot_IK_Right} />
      <primitive object={nodes.Ctrl_LegPole_IK_Right} />
      <skinnedMesh geometry={nodes.Ch39.geometry} material={materials['Ch39_Body.001']} skeleton={nodes.Ch39.skeleton} />
    </group>
  )
}

useGLTF.preload('/abedance.glb')
