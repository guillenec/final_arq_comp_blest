
const CardSkeleton = () => {
  return (
<div className="w-64 h-[400px] flex flex-col bg-white  animate-pulse rounded-xl p-4 gap-4">
  <div className="bg-gray-200 w-full h-1/2 animate-pulse rounded-md"></div>
  <div className="flex flex-col gap-2">
    <div className="bg-gray-200 w-full h-4 animate-pulse rounded-md"></div>
    <div className="bg-gray-200 w-4/5 h-4 animate-pulse rounded-md"></div>
    <div className="bg-gray-200 w-full h-4 animate-pulse rounded-md"></div>
    <div className="bg-gray-200 w-2/4 h-4 animate-pulse rounded-md"></div>
  </div>
</div>

  )
}

export default CardSkeleton