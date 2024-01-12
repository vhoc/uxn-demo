import React, { useState } from "react";
import styles from './DraggableList.module.css'
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { DraggableItem } from "./DraggableItem";

export interface Props {
   children?: React.ReactNode | undefined
   width?: string | number | undefined
   height?: string | number | undefined
}

export const DraggableList = ( props : Props ) => {

   const [items, setItems] = useState([
      { id: 1, title: "Draggable Item #1", image: "https://picsum.photos/48/48", description: "This is some text description" },
      { id: 2, title: "Draggable Item #2", image: "https://picsum.photos/48/48", description: "This is some text description" },
      { id: 3, title: "Draggable Item #3", image: "https://picsum.photos/48/48", description: "This is some text description" },
      { id: 4, title: "Draggable Item #4", image: "https://picsum.photos/48/48", description: "This is some text description" },
      { id: 5, title: "Draggable Item #5", image: "https://picsum.photos/48/48", description: "This is some text description" },
   ])

   const handleDragEnd = ( event: any ) => {
      const { active, over } = event

      const oldIndex = items.findIndex( item => item.id === active.id )
      const newIndex = items.findIndex( item => item.id === over.id )

      const newOrder = arrayMove( items, oldIndex, newIndex )
      setItems( newOrder )
   }

   return (
      <DndContext
         collisionDetection={ closestCenter }
         onDragEnd={ handleDragEnd }
      >
         <div
            className={ styles.container }
            style={{ width: props.width, height: props.height }}
            { ...props }
         >
            {/* { props.children } */}
            <SortableContext items={ items } strategy={ verticalListSortingStrategy }>
            { items.map((item, index) => <DraggableItem key={index} id={item.id} title={ item.title } image={ item.image } description={ item.description } width={'100%'} />)}
            </SortableContext>
         </div>
      </DndContext>
   )

}