export default function Badge({ caption }: any) {
    return <>
        <div className="flex w-28 bg-emerald-100 justify-center rounded-md py-1">
            <p className='text-emerald-700 text-xs'>
                {caption}
            </p>
        </div>
    </>
}