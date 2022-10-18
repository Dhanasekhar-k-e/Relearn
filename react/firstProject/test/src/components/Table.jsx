import React from 'react'

export default function Table(){
    return (
        <div>
            <table>
                <tr>
                    <td>
                         <Button name="JOIN US" background="blue"/>  
                    </td>
                    <td>
                         <Button name="SETTINGS" background="teal"/>  
                    </td>
                </tr>
                <tr>
                    <td>
                         <Button name="LOGIN" background="pink"/>  
                    </td>
                    <td>
                         <Button name="CONTACT US" background="red"/>  
                    </td>
                </tr>
                <tr>
                    <td>
                         <Button name="SEARCH" background="blue"/>  
                    </td>
                    <td>
                         <Button name="HELP" background="orange"/>  
                    </td>
                </tr>
                <tr>
                    <td>
                         <Button name="HOME" background="green"/>  
                    </td>
                    <td>
                         <Button name="DOWNLOAD" background="violet"/>  
                    </td>
                </tr>
            </table>
            
        </div>
    );
}