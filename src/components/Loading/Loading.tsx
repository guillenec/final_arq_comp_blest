

const Loading = () => {
  return (
    <div className="flex-col gap-2 w-full flex items-center justify-center">
      <div className="w-20 h-20 border-4 border-transparent animate-spin  flex items-center justify-center border-t-[#b1182e] rounded-full">
        <div className="w-16 h-16 border-4 border-transparent animate-spin duration-3000 flex items-center justify-center border-t-[#283732] rounded-full">
          <div className="w-12 h-12 border-4 border-transparent animate-spin duration-5000 flex items-center justify-center border-t-[#eee0a1] rounded-full" />
        </div>
      </div>
    </div>

  )
}

export default Loading