import { useState } from "react"
import { ConfigAtom, ConfigChairTextureAtom , ConfigTableTextureAtom, price} from "@/store/configAtom"
import { useRecoilState } from "recoil"
import { configurationData } from "@/store/configurationData"

export default function Configurator() {
  const [config1, setConfig1] = useState(0)
  const [config2, setConfig2] = useState(0)
  const [chairTextureAtom, setChairTextureAtom] = useRecoilState(ConfigChairTextureAtom)
  const [tableTextureAtom, setTableTextureAtom] = useRecoilState(ConfigTableTextureAtom)
  const [TotalPrice, setTotalPrice] = useRecoilState(price)
  const [config, setConfig] = useRecoilState(ConfigAtom)

  
    return (   <div className="configurator">
        <div className="c_title poppins-bold ">DINING TABLE CONFIGURATOR</div>
  
        <div className="c_nav_wrapper">
          <div className={['c_nav_btn', (!config1) ? 'active_c_nav_btn' : '' ].join(' ')} onClick={() => setConfig1(0)}>Configurations</div>
          <div className={['c_nav_btn', (config1) ? 'active_c_nav_btn' : '' ].join(' ')} onClick={() => setConfig1(1)}>Texture</div>
        </div>
  
        <div className="configurations_wrapper" style={{display:(!config1) ? 'block' : 'none'}}>
          <div className={["c_config_tab", (config == 0) ? "active_c_config_tab" : ""].join(' ')} onClick={() => {setConfig(0); setTotalPrice([configurationData.configuration[0].price, TotalPrice[1], TotalPrice[2]]) }}><div className="config_img"><img src="/config/config1.png" height={'100%'} width={'100%'} /></div></div>
          <div className={["c_config_tab", (config == 1) ? "active_c_config_tab" : ""].join(' ')} onClick={() => {setConfig(1); setTotalPrice([configurationData.configuration[1].price, TotalPrice[1], TotalPrice[2]]) }}><div className="config_img"><img src="/config/config2.png" height={'100%'} width={'100%'} /></div></div>
          <div className={["c_config_tab", (config == 2) ? "active_c_config_tab" : ""].join(' ')} onClick={() => {setConfig(2); setTotalPrice([configurationData.configuration[2].price, TotalPrice[1], TotalPrice[2]]) }}><div className="config_img"><img src="/config/config3.png" height={'100%'} width={'100%'} /></div></div>
          <div className={["c_config_tab", (config == 3) ? "active_c_config_tab" : ""].join(' ')} onClick={() => {setConfig(3); setTotalPrice([configurationData.configuration[3].price, TotalPrice[1], TotalPrice[2]]) }}><div className="config_img"><img src="/config/config4.png" height={'100%'} width={'100%'} /></div></div>
        </div>
        <div className="texture_wrapper"  style={{display:(config1) ? 'block' : 'none'}}>
          <div className="texture_nav">
            <div className={['c_t_nav_btn', (!config2) ? 'active_c_t_nav_btn' : '' ].join(' ')} onClick={() => setConfig2(0)}>Table</div>
            <div className={['c_t_nav_btn', (config2) ? 'active_c_t_nav_btn' : '' ].join(' ')} onClick={() => setConfig2(1)}>Chair</div>
          </div>
          <div className="texture_wrapper_table" style={{display:(!config2) ? 'block' : 'none'}}>
            <div className={["c_texture_tab", (tableTextureAtom == 0) ? "active_c_config_tab" : ""].join(" ")} onClick={() => {setTableTextureAtom(0); setTotalPrice([TotalPrice[0], configurationData.texture.table[0].price, TotalPrice[1]])}}><div className="texture_img"><img src="/wood_texture1/BaseColor.jpg" height={'100%'} width={'100%'} /></div></div>
            <div className={["c_texture_tab", (tableTextureAtom == 1) ? "active_c_config_tab" : ""].join(" ")} onClick={() => {setTableTextureAtom(1);  setTotalPrice([TotalPrice[0], configurationData.texture.table[1].price, TotalPrice[1]])}}><div className="texture_img"><img src="/wood_texture2/BaseColor.jpg" height={'100%'} width={'100%'} /></div></div>
          </div>
  
          <div className="texture_wrapper_chair" style={{display:(config2) ? 'block' : 'none'}}>
            <div className={["c_texture_tab", (chairTextureAtom == 0) ? "active_c_config_tab" : ""].join(" ")} onClick={() => {setChairTextureAtom(0);setTotalPrice([TotalPrice[0], configurationData.texture.chair[0].price, TotalPrice[1]])}}><div className="texture_img"><img src="/fabric_texture1/BaseColor.png" height={'100%'} width={'100%'} /></div></div>
            <div className={["c_texture_tab", (chairTextureAtom == 1) ? "active_c_config_tab" : ""].join(" ")} onClick={() => {setChairTextureAtom(1);setTotalPrice([TotalPrice[0], configurationData.texture.chair[1].price, TotalPrice[1]])}}><div className="texture_img"><img src="/fabric_texture2/BaseColor.jpg" height={'100%'} width={'100%'} /></div></div>
            <div className={["c_texture_tab", (chairTextureAtom == 2) ? "active_c_config_tab" : ""].join(" ")} onClick={() => {setChairTextureAtom(2);setTotalPrice([TotalPrice[0], configurationData.texture.chair[2].price, TotalPrice[1]])}}><div className="texture_img"><img src="/fabric_texture3/BaseColor.jpg" height={'100%'} width={'100%'} /></div></div>
          </div>
  
  
        </div>
     </div>)
}