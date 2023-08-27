function useHandleCopy(link: string) {
    async function handleCopy() {
        await navigator.clipboard.writeText(link)
    }

    return handleCopy
}

export default useHandleCopy