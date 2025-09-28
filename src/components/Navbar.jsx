import React from "react";
import {
  Navbar as HeriUi,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@heroui/react";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <HeriUi
      className="shadow-lg text-white"
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}   // ✅ لازم يتربط بالستيت
    >
      {/* Logo */}
      <NavbarBrand>
        <p className="font-bold text-black">Eslam</p>
      </NavbarBrand>

      {/* Center Links (Desktop) */}
      <NavbarContent className="hidden sm:flex gap-20" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" aria-current="page" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Gallery
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Right Side (Desktop) */}
      <NavbarContent justify="end" className="gap-4">
        {/* WhatsApp */}
        <NavbarItem>
          <Button
            as={Link}
            href="https://wa.me/201063708830"
            target="_blank"
            rel="noopener noreferrer"
            isIconOnly
            color="success"
            variant="flat"
          >
            <FaWhatsapp size={24} />
          </Button>
        </NavbarItem>

        {/* Facebook */}
        <NavbarItem>
          <Button
            as={Link}
            href="https://www.facebook.com/share/1BSg2N1N3c/"
            target="_blank"
            rel="noopener noreferrer"
            isIconOnly
            color="primary"
            variant="flat"
          >
            <FaFacebook size={24} />
          </Button>
        </NavbarItem>

        {/* Menu Toggle (Mobile) */}
        <NavbarMenuToggle
          isSelected={isMenuOpen}             // ✅ بيربط الآيكونة بالحالة
          onClick={() => setIsMenuOpen(!isMenuOpen)} // ✅ يقلب الفتح والقفل
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        <NavbarMenuItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="#">
            Gallery
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarMenuItem>

        {/* WhatsApp Btn */}
        <NavbarMenuItem>
          <Button
            as={Link}
            href="https://wa.me/201063708830"
            target="_blank"
            rel="noopener noreferrer"
            startContent={<FaWhatsapp size={20} />}
            color="success"
            variant="flat"
            fullWidth
          >
            Chat on WhatsApp
          </Button>
        </NavbarMenuItem>

        {/* Facebook Btn */}
        <NavbarMenuItem>
          <Button
            as={Link}
            href="https://www.facebook.com/share/1BSg2N1N3c/"
            target="_blank"
            rel="noopener noreferrer"
            startContent={<FaFacebook size={20} />}
            color="primary"
            variant="flat"
            fullWidth
          >
            Visit Facebook
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </HeriUi>
  );
}
