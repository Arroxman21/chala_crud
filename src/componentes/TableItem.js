import React from "react";

const TableItem=(props , remove)=>{
    return(
        <tbody   >
          
        <tr >
          <td className="rowlar">{props.number 
        
        
        
        }</td>
          <td className="rowlar">{props.post.title }</td>
          <td className="rowlar">{props.post.stack}</td>
          <td className="rowlar">
            <button className= ' btn btn-danger'
             onClick={() => props.remove(props.post)}>Delet</button></td>

        </tr>
      </tbody>
    );
};

export default TableItem;