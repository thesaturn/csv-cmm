import React from 'react'

function Card(counts) {

    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Card</div>
                <p className="text-gray-700 text-base">
                Lorem ipsum
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{counts}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#test2</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#test3</span>
            </div>
        </div>
    )
}

export default Card


