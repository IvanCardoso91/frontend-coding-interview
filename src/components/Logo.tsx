import LogoSvg from "../assets/logo.svg?react";

export default function Logo() {
  return (
    <div className="w-12 h-12 flex items-center justify-center overflow-visible">
      <LogoSvg className="w-full h-full" />
    </div>
  );
}
