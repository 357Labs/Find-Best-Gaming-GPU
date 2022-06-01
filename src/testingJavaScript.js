let currentPage = 15;
const setCurrentPage = (newCurrentPage) => currentPage = newCurrentPage;


function goToNextPage() {
    setCurrentPage(currentPage + 1);
}
goToNextPage();
console.log(currentPage);