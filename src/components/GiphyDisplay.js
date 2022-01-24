
function GiphyDisplay({giphy}){
    const loaded = () => {
        return(
            <>
            <img src={giphy.data.images.downsized_large.url} alt="" />
            </>
        );
    };
    const loading = () => <h1>Press Button To Load Gif</h1>
    return giphy ? loaded() : loading();
}
export default GiphyDisplay;