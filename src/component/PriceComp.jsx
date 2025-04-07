import { price } from "@/store/configAtom"
import { useRecoilValue } from "recoil"
import priceModifier from "@/lib/priceModifier"
export default function PriceComp() {
      const totalPrice = useRecoilValue(price)
    return (
        <div className="price">
        <div style={{fontSize: '20px', fontWeight:'bold'}}>Total Price</div>
        <div className="price-n">
          <div style={{fontSize: '30px', fontWeight:'bold'}}>₹</div>
          <div style={{fontSize: '26px', fontWeight:'bold'}}>{priceModifier(totalPrice[0] 
            + totalPrice[1] + totalPrice[2])}</div>
        </div>
       </div>
    )
}