
import './App.css'
import CheckoutStepper from './components/CheckoutStepper'
function App() {

  const CHECKOUT_CONFIG = [
    {
      name: 'Customer Info',
      component: ()=> <div>Provide your contact details</div>
    },
    {
      name: 'Shipping Info',
      component: ()=> <div>Provide your shipping details</div>
    },
    {
      name: 'Payment',
      component: ()=> <div>Provide your Payment details</div>
    },
    {
      name: 'Delivered',
      component: ()=> <div>Delivered</div>
    },
  ]


  return (
    <>
      <h1>Checkout</h1>
      <CheckoutStepper  checkoutStepperConfig={CHECKOUT_CONFIG}/>
    </>
  )
}

export default App
