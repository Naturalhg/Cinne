function getCinneUtils() {
    let currentCinneList;
    //let currentFilter = 1337;
    let url = "https://api.themoviedb.org/3/";
    let api_key = "63118a7f07e12242453585da7c658120";

    let utils = {
        getById,
        getCinne,
        getArtists,
        getGenders,
        getSearch,
        getDetails
    };

    function getById(type, id, langue) {
		return fetch(url + type + "/" + id + "?api_key=" + api_key + "&language=" + langue)
		.then(response => response.json())
		.then(data => data)
	}

    function getCinne(type, page, filter, genres, langue) {
        return fetch(url + "discover/" + type + "?api_key=" + api_key + "&page=" + page +
                    "&sort_by=" + filter + "&with_genres=" + genres + "&language=" + langue)
        .then(response => response.json())
        .then(data => data);
    }

    function getArtists(page, langue) {
        return fetch(url + "person/popular?api_key=" + api_key + "&page=" + page + "&language=" + langue)
        .then(response => response.json())
        .then(data => data);
    }

    function getGenders(type, langue) {
        return fetch(url + "genre/" + type + "/list?api_key=" + api_key + "&language=" + langue)
        .then(response => response.json())
        .then(data => data);
    }

    function getSearch(type, page, search, langue) {
        return fetch(url + "search/" + type + "?api_key=" + api_key + "&page=" + page + "&query=" + encodeURIComponent(search) + "&language=" + langue)
        .then(response => response.json())
        .then(data => data);
    }

    function getDetails(type, id, detail, langue) {
        return fetch(url + type + "/" + id + "/" + detail + "?api_key=" + api_key + "&language=" + langue)
        .then(response => response.json())
        .then(data => data)
    }

    return utils;
}