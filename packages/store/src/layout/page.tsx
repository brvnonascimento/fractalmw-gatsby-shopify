import { GatsbyBrowser } from 'gatsby'
import React from 'react'
import { styled,  } from '@compiled/css-in-js'

const page: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return (
    <Layout>
      <Grid
        as="header"
        justifyItems={'center'}
        gridColumnGap={5}
        fontWeight={'bold'}
        fontSize={'xl'}
        width={'100vw'}
        alignItems={'center'}
        display={'grid'}
        gridTemplateColumns={{
          base: '100px 1fr 100px',
          lg: '100px 0.5fr 0.25fr 0.25fr 100px'
        }}
        bg={'black'}
        color={'white'}
        px={{ lg: '5px' }}
        py={3}
        {...props}
      >
        <Link
          as={GatsbyLink}
          to={'/'}
          gridArea={'1 / 1'}
          alignSelf={'center'}
          title={'Home | Fractal Music Wear'}
        >
          <LogoIcon
            width={'72px'}
            height={'72px'}
            aria-label={'Fractal Music Wear Logo'}
          />
        </Link>

        <NavLinks
          zIndex={10}
          justifySelf={'start'}
          gridArea={{
            sm: '1 / span 2',
            md: '1 / 2'
          }}
          fontSize={{ base: 'sm', md: 'md' }}
          maxWidth={{ lg: '420px' }}
          links={[
            {
              title: '',
              to: '/camisetas/',
              style: {
                d: 'flex',
                justifyContent: 'center',
                px: '10px'
              },
              icon: (
                <Menu>
                  <Link
                    as={GatsbyLink}
                    to={'/camisetas'}
                    d={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-around'}
                  >
                    <ShirtIcon width={'1rem'} height={'1rem'} mr={2} />
                    Camisetas
                  </Link>
                  <MenuButton
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-around'}
                    transition="all 0.2s"
                  >
                    {!isMobile ? (
                      <ChevronDownIcon fontSize={'1.5rem'} />
                    ) : (
                      <ChevronUpIcon ml={1} fontSize={'1.5rem'} />
                    )}
                  </MenuButton>

                  <MenuList
                    color={'black'}
                    zIndex={10}
                    w={{ base: '100vw', md: 'unset' }}
                  >
                    <MenuGroup title="Categorias">
                      {categories.map(({ title, handle }) => (
                        <MenuItem key={handle}>
                          <Link
                            as={GatsbyLink}
                            to={`/camisetas/categoria/${handle}`}
                            w={'100%'}
                            h={'100%'}
                          >
                            {title}
                          </Link>
                        </MenuItem>
                      ))}
                    </MenuGroup>
                  </MenuList>
                </Menu>
              )
            },
            {
              title: 'Contato',
              to: '/contato',
              icon: <PhoneIcon />,
              style: {
                opacity: 0.8
              }
            },
            {
              title: 'Sobre',
              to: '/sobre',
              icon: <InfoOutlineIcon />,
              style: {
                opacity: 0.8
              }
            }
          ]}
        />

        <SearchBar
          loading={loading}
          my={'10px'}
          error={error}
          handleSearch={(search) => {
            handleSearch(5, search)
          }}
          searchResults={searchResults}
          width={{
            base: '100%',
            lg: '100%'
          }}
          gridArea={{
            base: '2 / 1 / 2 / 4',
            lg: '1 / span 2'
          }}
          justifySelf={'start'}
        >
          <></>
        </SearchBar>

        <CartButton
          gridArea={{ base: '1 / 3', lg: '1 / 5' }}
          count={cartCount}
          onClick={onToggle}
        />
        <CartDrawer
          items={items}
          onDeleteItem={removeItemFromcart}
          checkoutUrl={checkoutUrl ?? ''}
          isOpen={isOpen}
          onClose={onClose}
        />
      </Grid>

      {element}
    </Layout>
  )

  // return (
  //   <Layout>
  //     <Header />

  //     {element}

  //     <Link
  //       as="a"
  //       title={'Fale conosco no Whatsapp!'}
  //       isExternal
  //       href={'https://wa.me/+5519984311890'}
  //       position={'fixed'}
  //       width={{
  //         base: '48px',
  //         md: '64px'
  //       }}
  //       bottom={{ base: '80px', lg: '33px' }}
  //       right={{ base: '8px', lg: '31px' }}
  //       zIndex={3}
  //       transition={'all .2s ease-in-out'}
  //       bg={'white'}
  //       p="5px"
  //       rounded={'100%'}
  //       _hover={{
  //         transform: 'scale(1.3)'
  //       }}
  //       _focus={{
  //         transform: 'scale(1.3)'
  //       }}
  //       boxShadow={'md'}
  //     >
  //       <WhatsappIcon />
  //     </Link>

  //     <Footer position={'relative'} zIndex={4} />
  //   </Layout>
  // )
}

export default page
