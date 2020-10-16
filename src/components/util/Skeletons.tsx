import React from 'react'
import { Skeleton, useColorMode } from '@chakra-ui/core'
import Card from './Card'
import { AnyObject } from '../../types'
import { motion } from 'framer-motion'

export const SkeletonCards = ({
	quanitity = 1,
	motionProps,
}: {
	quanitity?: Number
	motionProps?: AnyObject
}) => {
	const { colorMode } = useColorMode()

	const fadeColors = {
		startColor: colorMode === 'dark' ? 'gray.800' : 'tan.600',
		endColor: colorMode === 'dark' ? 'gray.900' : 'tan.500',
	}

	const cards: any[] = new Array(quanitity)

	if (motionProps) {
		for (let i = 0; i < cards.length; i++) {
			cards[i] = (
				<motion.div key={i} {...motionProps}>
					<Skeleton {...fadeColors}>
						<Card />
					</Skeleton>
				</motion.div>
			)
		}
	} else {
		for (let i = 0; i < cards.length; i++) {
			cards[i] = (
				<Skeleton key={i} {...fadeColors}>
					<Card />
				</Skeleton>
			)
		}
	}

	return cards
}
