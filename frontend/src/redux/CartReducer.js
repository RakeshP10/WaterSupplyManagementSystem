import { ADD_TO_CART} from './ActionTypes';

const initState = {
    items: [
        {
          "id": 0,
          "name": "Water Can 20Litres",
          "image": "images/watercan.jpg",
          "label": "Hot",
          "price": "Rs 30",
          "featured": true,
          "description": "Water can of 20 Litres volume"
        },
        {
            "id": 1,
            "name": "Water Bottle 1Litre",
            "image": "images/waterbottle1.jpg",
            "label": "Hot",
            "price": "Rs 10",
            "featured": true,
            "description": "Water bottle of 1 Litre volume"
        },
        {
            "id": 2,
            "name": "Water Bottle 2Litre",
            "image": "images/waterbottle2.jpg",
            "label": "Hot",
            "price": "Rs 20",
            "featured": true,
            "description": "Water bottle of 2 Litre volume"
        },
        {
            "id": 3,
            "name": "Water can 5Litres",
            "image": "images/waterbottle3.jpg",
            "label": "Hot",
            "price": "Rs 25",
            "featured": true,
            "description": "Water can of 5 Litre volume"
        },
        {
            "id": 4,
            "name": "Water Dispencer",
            "image": "images/dispenser.jpg",
            "label": "Hot",
            "price": "Rs 150",
            "featured": true,
            "description": "Water Dispencer with tap"
        },
        {
            "id": 5,
            "name": "Water Can Empty",
            "image": "images/watercan_empty.jpg",
            "label": "Hot",
            "price": "Rs 200",
            "featured": true,
            "description": "Empty Water Can for Permanent use"
        },
        {
            "id": 6,
            "name": "Water Tanker",
            "image": "images/watertanker.jpg",
            "label": "Hot",
            "price": "Rs 500",
            "featured": true,
            "description": "Water Tanker with 600 Litres Volume"
        }
      ],
    addedItems:[],
    total: 0

}
const CartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
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
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    
    else{
        return state
        }
    
}

export default CartReducer;