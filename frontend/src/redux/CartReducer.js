import { ADD_TO_CART,REMOVE_ITEM,ADD_QUANTITY,SUB_QUANTITY} from './ActionTypes';
/*const axios = require('axios');

let data;

axios.get('http://localhost:3001/bottles')
.then((response) => {
    console.log(response);
    data = response;  
});*/


const initState = {
    items: [
        {
            "id": 0,
            "name": "Water Can 20Litres",
            "price": 30,
            "image": "images/watercan.jpg",
            "description": "Water can of 20 Litres volume"
        },
        {
            "id": 1,
            "name": "Water Bottle 1Litre",
            "price": 10,
            "image": "images/waterbottle1.jpg",
            "description": "Water bottle of 1 Litre volume"
        },
        {
            "id": 2,
            "name": "Water Bottle 2Litre",
            "price": 20,
            "image": "images/waterbottle2.jpg",
            "description": "Water bottle of 2 Litre volume"
        },
        {
            "id": 3,
            "name": "Water can 5Litres",
            "price": 25,
            "image": "images/waterbottle3.jpg",
            "description": "Water can of 5 Litre volume"
        },
        {
            "id": 4,
            "name": "Water Dispencer",
            "price": 150,
            "image": "images/dispenser.jpg",
            "description": "Water Dispencer with tap"
        },
        {
            "id": 5,
            "name": "Water Can Empty",
            "price": 200,
            "image": "images/watercan_empty.jpg",
            "description": "Empty Water Can for Permanent use"
        },
        {
            "id": 6,
            "name": "Water Tanker",
            "price": 500,
            "image": "images/watertanker.jpg",
            "description": "Water Tanker with 500 Litres Volume"
        }
    ],
    addedItems:[],
    total: 0

}
const CartReducer= (state = initState,action)=>{
   
    
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }

    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if(action.type=== ADD_QUANTITY){
        let addedItem = state.addedItems.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }

    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.addedItems.find(item=> item.id === action.id) 
        
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }
    
    else{
        return state
        }
    
}

export default CartReducer;