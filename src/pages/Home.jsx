import React from 'react'
import { useFetchPageData } from '../hooks/useFetchPageData';
import Main from '../main/Main'
import PageWrapper from '../PageWrapper'

export default function Home() {
    const { result, loading, isFound, isFetchPageData } = useFetchPageData("home");
  return (
    <PageWrapper>
            <Main pageData={result}/>
    </PageWrapper>
  )
}
