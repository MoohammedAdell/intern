import { AlertCircle } from "lucide-react"

function ErrorMessage({ error }) {
    return (
        <div className="max-w-md mx-auto p-4 bg-red-50 border border-red-200 rounded-xl flex items-start space-x-3 text-red-700">
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold">Something went wrong</h3>
              <p className="text-sm mt-1 text-red-600">{error}</p>
            </div>
          </div>
    )
}

export default ErrorMessage
