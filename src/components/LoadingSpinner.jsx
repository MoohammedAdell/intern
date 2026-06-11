import { Loader2 } from "lucide-react"

function LoadingSpinner() {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-10 w-10 text-indigo-600 animate-spin" />
            <p className="mt-4 text-gray-500 font-medium">
              Loading products...
            </p>
          </div>
    )
}

export default LoadingSpinner
