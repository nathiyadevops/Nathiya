import React from 'react'
import { Suspense } from 'react'

const loading = () => {
    return (
        <section className='py-24'>
            <Suspense fallback={<p>Loading feed...</p>}>
                <page />
            </Suspense>

        </section>
    )
}

export default loading
