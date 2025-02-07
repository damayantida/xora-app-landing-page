const FaqItem = ({ item = {}, index = 0 }) => {
	if (!item || !item.id) return null; // Prevents errors if `item` is undefined

	const [activeId, setActiveId] = useState(null);
	const active = activeId === item.id;

	return (
		<div className='relative z-2 mb-16'>
			<div
				className='group relative flex cursor-pointer items-center justify-between gap-10 px-7'
				onClick={() => setActiveId(active ? null : item.id)}
			>
				<div className='flex-1'>
					<div className='small-compact mb-1.5 text-p4 max-lg:hidden'>
						{index < 10 ? '0' : ''}
						{index}
					</div>
					<div
						className={clsx(
							'h6 text-p4 transition-colors duration-500',
							active && 'max-lg:text-p1'
						)}
					>
						{item.question || 'No question available'}
					</div>
				</div>
			</div>

			{active && (
				<div className='body-3 px-7 py-3.5'>
					{item.answer || 'No answer available'}
				</div>
			)}
		</div>
	);
};

export default FaqItem;
