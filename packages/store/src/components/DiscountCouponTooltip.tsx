import React from 'react'
import { Tooltip, TooltipProps } from '@chakra-ui/tooltip'

export const DiscountCouponTooltip = ({
  hasCopied,
  children
}: TooltipProps & { hasCopied: boolean }) => {
  return (
    <Tooltip
      hasArrow
      label={
        !hasCopied
          ? 'Clique para copiar o cupom e usar antes de finalizar a compra'
          : 'Cupom copiado!'
      }
      fontWeight={'bold'}
      bg={'purple.500'}
    >
      {children}
    </Tooltip>
  )
}
