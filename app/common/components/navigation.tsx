import { Link } from "react-router";
import { Separator } from "~/common/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  BarChart3Icon,
  BellIcon,
  LogOutIcon,
  MessageCircleIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import { FlickeringGrid } from "../../../components/magicui/flickering-grid";

const menus = [
  {
    name: "제품소개",
    to: "/",
    items: [
      {
        name: "제조 제품",
        description: "Supreme CNS가 직접 제조하는 의료기기 제품",
        to: "/products/manufactured",
      },
      {
        name: "수입 제품",
        description: "해외 우수 의료기기 브랜드 제품",
        to: "/products/imported",
      },
      {
        name: "신제품",
        description: "최신 출시된 의료기기 제품",
        to: "/products/new",
      },
    ],
  },
  {
    name: "기술지원",
    to: "/",
    items: [
      {
        name: "제품 설치",
        description: "의료기기 설치 및 시운전 서비스",
        to: "/support/installation",
      },
      {
        name: "정기점검",
        description: "의료기기 정기 점검 및 유지보수",
        to: "/support/maintenance",
      },
      {
        name: "기술교육",
        description: "의료기기 사용자 교육 프로그램",
        to: "/support/training",
      },
      {
        name: "A/S 문의",
        description: "의료기기 수리 및 기술 지원",
        to: "/support/as",
      },
    ],
  },
  {
    name: "회사소개",
    to: "/",
    items: [
      {
        name: "회사소개",
        description: "Supreme CNS의 역사와 비전",
        to: "/",
      },
      {
        name: "인증현황",
        description: "국내외 인증 및 품질관리 현황",
        to: "/",
      },
      {
        name: "오시는 길",
        description: "Supreme CNS 위치 및 연락처",
        to: "/",
      },
    ],
  },
  {
    name: "고객지원",
    to: "/",
  },
];

export default function Navigation({
  isLoggedIn,
  hasNotifications,
  hasMessages,
}: {
  isLoggedIn: boolean;
  hasNotifications: boolean;
  hasMessages: boolean;
}) {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-16 z-0">
        <FlickeringGrid
          squareSize={4}
          gridGap={6}
          flickerChance={0.3}
          color="rgb(0, 0, 0)"
          maxOpacity={0.3}
          className="h-full w-full"
        />
      </div>
      <nav className="flex px-20 h-16 items-center justify-between fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center">
          <Link to="/" className="font-bold tracking-tighter text-lg">
            Supreme CNS
          </Link>
          <Separator orientation="vertical" className="h-6 mx-4" />
          <NavigationMenu>
            <NavigationMenuList>
              {menus.map((menu) => (
                <NavigationMenuItem key={menu.name}>
                  {menu.items ? (
                    <>
                      <Link to={menu.to}>
                        <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                      </Link>
                      <NavigationMenuContent>
                        <ul className="grid w-[600px] font-light gap-3 p-4 grid-cols-2">
                          {menu.items?.map((item) => (
                            <NavigationMenuItem
                              key={item.name}
                              className={cn([
                                "select-none rounded-md transition-colors focus:bg-accent hover:bg-accent",
                              ])}
                            >
                              <NavigationMenuLink>
                                <Link
                                  className="p-3 space-y-1 block leading-none no-underline outline-none"
                                  to={item.to}
                                >
                                  <span className="text-sm font-medium leading-none">
                                    {item.name}
                                  </span>
                                  <p className="text-sm leading-snug text-muted-foreground">
                                    {item.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </NavigationMenuItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link className={navigationMenuTriggerStyle()} to={menu.to}>
                      {menu.name}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            <Button size="icon" variant="ghost" asChild className="relative">
              <Link to="/my/notifications">
                <BellIcon className="size-4" />
                {hasNotifications && (
                  <div className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full" />
                )}
              </Link>
            </Button>
            <Button size="icon" variant="ghost" asChild className="relative">
              <Link to="/my/messages">
                <MessageCircleIcon className="size-4" />
                {hasMessages && (
                  <div className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full" />
                )}
              </Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage src="https://github.com/serranoarevalo.png" />
                  <AvatarFallback>N</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="flex flex-col">
                  <span className="font-medium">관리자</span>
                  <span className="text-xs text-muted-foreground">admin@supremecns.com</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to="/my/dashboard">
                      <BarChart3Icon className="size-4 mr-2" />
                      대시보드
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to="/my/profile">
                      <UserIcon className="size-4 mr-2" />
                      프로필
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to="/my/settings">
                      <SettingsIcon className="size-4 mr-2" />
                      설정
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/auth/logout">
                    <LogOutIcon className="size-4 mr-2" />
                    로그아웃
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Button asChild variant="secondary">
              <Link to="/">로그인</Link>
            </Button>
            <Button asChild>
              <Link to="/">회원가입</Link>
            </Button>
          </div>
        )}
      </nav>
    </>
  );
}
