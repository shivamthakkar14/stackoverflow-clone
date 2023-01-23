import React from 'react'

const Avatar = ({ children,color,fontSize,px,py,backgroundColor,borderRadius,cursor,textDecoration}) => {
  const style={
    color:color || "black",
    padding:`${py} ${px}`,
    fontSize,
    borderRadius,
    backgroundColor,
    textAlign: "center",
    cursor:cursor || null,
    textDecoration:"none"

  }
  return (
    <div style={style}>
      { children }
    </div>
  )
}

export default Avatar
