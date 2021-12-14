import { Navbar, NavLink, NavbarBrand, NavbarToggler, Collapse, 
Nav, NavItem, DropdownItem, DropdownToggle, DropdownMenu, 
UncontrolledDropdown} from 'reactstrap';


function Navbar1() {
	return (
<div>
  <Navbar
    color="white"
    expand="md"
    light
  >
    <NavbarBrand href="/">
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
	  navbar
	  className="me-auto container-fluid nav"
        
      >
        <NavItem >
          <NavLink href="/">
            New
          </NavLink>
        </NavItem>
		<NavItem>
          <NavLink href="/">
            Best Seller
          </NavLink>
        </NavItem>

        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Skin Care
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem >
              Facial Cleansers
            </DropdownItem>
            <DropdownItem >
              Scrubs and Masks
            </DropdownItem>
            <DropdownItem >
              Oils and Moisturizers
            </DropdownItem>
			<DropdownItem >
              Face Treatments
            </DropdownItem>
			<DropdownItem divider />
			<DropdownItem>
              Shop By Concern
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
		<UncontrolledDropdown>
          <DropdownToggle
            caret
            nav
			className='px-2'
          >
            Body Care
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Cleansers
            </DropdownItem>
            <DropdownItem>
              Body Scrubs and Masks
            </DropdownItem>
            <DropdownItem>
              Moisturizers
            </DropdownItem>
			<DropdownItem divider />
			<DropdownItem>
              Shop By Concern
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
		<UncontrolledDropdown
          inNavbar
          nav
		  
        >
          <DropdownToggle
            caret
            nav
          >
            Hair Care
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Shampoo and Conditioners
            </DropdownItem>
            <DropdownItem>
              Hair Masks
            </DropdownItem>
            <DropdownItem>
              Hair Treatments
            </DropdownItem>
			<DropdownItem>
              Styling Tools
            </DropdownItem>
			<DropdownItem divider />
			<DropdownItem>
              Shop By Concern
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
		<NavItem>
          <NavLink href="/">
            Sale
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</div>
	)
}

export default Navbar1
