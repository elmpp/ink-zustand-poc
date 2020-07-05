const React = require("react");
const { Box, Text } = require("ink");
const { useEffect } = require("react");
const create = require('zustand').default;

module.exports = () => {
	const {addLines} = useAStore()

	useEffect(() => {
		// increment()
    const increment = (timer) => {
			addLines([`${Math.random}`])
    }
    const timer = setInterval(() => {
      increment(timer)
    }, 2000)
    return () => clearInterval(timer)
	}, [addLines])

	console.log('rerendering');

	return (
		<Box>
			<Sub />
		</Box>
	);
};

const Sub = () => {
	const {lines} = useStore(state => ({lines: state.lines}))

	return (
		<Box>
			{lines.map(line => <Text>{line}</Text>)}
		</Box>
	);
}


const [useStore] = create((set, get) => ({
	lines: ['first'],
	addLines: lines => set(state => state.lines.concat(lines)),
}))

const useAStore = () => {
	const {addLines} = useStore(state => ({addLines: state.addLines}))
	return {addLines}
}