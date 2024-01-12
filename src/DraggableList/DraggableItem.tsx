import React from "react"
import styles from './DraggableItem.module.css'
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

export interface Props {
   id: number
   image: string
   title: string
   description?: string | undefined
   width?: number | string | undefined
   style?: React.CSSProperties | undefined
}

export const DraggableItem = ( props : Props ) => {

   const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition
   } = useSortable( { id: props.id } )

   const style = {
      transform: CSS.Transform.toString(transform),
      transition,
   }

   return (
      <div
         // style={ style }
         ref={ setNodeRef }
         { ...attributes }
         { ...listeners }
         className={ styles.container }
         style={{ width: props.width, ...props.style, ...style }}
      >

         <img className={ styles.image } src={ props.image } alt={ props.title } width={ 48 } height={ 48 } />

         <div className={ styles.info }>

            <p className={ styles.title }>{ props.title }</p>
            <p>{ props.description }</p>

         </div>

      </div>
   )
}