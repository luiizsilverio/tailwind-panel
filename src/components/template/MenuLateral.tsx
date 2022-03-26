import { BellSvg, HomeSvg, SettingsSvg } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral(props) {
    return (
        <aside>
            <div className={`
              flex flex-col items-center justify-center
              h-20 w-20
              bg-gradient-to-r from-indigo-500 to-purple-800
            `}>
              <Logo />
            </div>
            <ul>
              <MenuItem url="/" texto="Início" icon={HomeSvg} />
              <MenuItem url="/ajustes" texto="Ajustes" icon={SettingsSvg} />
              <MenuItem url="/notificacoes" texto="Notificações" icon={BellSvg} />
            </ul>
        </aside>
    )
}