import useAuth from "../../data/hook/useAuth";
import { BellSvg, HomeSvg, LogoutSvg, SettingsSvg } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral(props) {
    const { logoutGoogle } = useAuth()

    return (
        <aside className={`
          flex flex-col
          bg-white dark:bg-gray-900
        `}>
            <div className={`
              flex flex-col items-center justify-center
              h-20 w-20
              bg-gradient-to-r from-indigo-500 to-purple-800
            `}>
              <Logo />
            </div>
            <ul className="flex-grow">
              <MenuItem url="/" texto="Início" icon={HomeSvg} />
              <MenuItem url="/ajustes" texto="Ajustes" icon={SettingsSvg} />
              <MenuItem url="/notificacoes" texto="Notificações" icon={BellSvg} />
            </ul>
            <ul>
              <MenuItem
                texto="Sair"
                icon={LogoutSvg}
                onClick={logoutGoogle}
                className={`
                  text-red-600 dark:text-red-400
                  hover:bg-red-400
                  hover:text-white dark:hover:text-white
                `}
              />
            </ul>
        </aside>
    )
}