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
import logo from '../../public/screencapture-manage-wix-logo-maker-esh-brands-a5de71a7-3284-4ed6-a64f-403dbe516c3d-design-editor-edit-2025-09-29-01_32_11.png'

export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <HeriUi
      className="shadow-lg text-white"
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}   // ✅ لازم يتربط بالستيت
    >
      
    <NavbarBrand>
  <Link href="#" className="flex items-center gap-2">
    <img
      src={logo}
      alt="Eslam Kitchens Logo"
      className="h-10 rounded-lg w-auto object-contain"
    />
    <span className="text-lg font-bold text-black hidden sm:block">
      Eslam
    </span>
  </Link>
</NavbarBrand>


      
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
