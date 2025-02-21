

function CartReducer(state,action) {
    switch (action.type){
        case "Add":
            const existingItem=state.find(item=>item.id===action.product.id);
            return existingItem ?
            state.map((item)=>(
                item.id===action.product.id?
                {...item,quantity:item.quantity+action.product.quantity}:item
            ))
            : [...state,{...action.product}];

        case "Remove":
            return state.filter(item=>item.id!==action.product.id);

        case "Increase":
            return state.map((item)=>(
                item.id===action.product.id ?
                {...item,quantity:item.quantity+1}:item
            ))

        case "Decrease":
            return state.map((item)=>(
                item.id===action.product.id && item.quantity>1?
                {...item,quantity:item.quantity-1}:item
            ))

        default:
            return state;
    }
  
}

export default CartReducer;