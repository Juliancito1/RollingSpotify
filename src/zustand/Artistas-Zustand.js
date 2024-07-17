import axios from "axios";
import { create } from "zustand";

const useArtistasStore = create((set) => ({
	artistas: [],
	loading: false,
	error: null,
    artista: null,
    canciones: [],

	getArtistas: async () => {
		set({ loading: true, error: null });
		try {
			const resp = await axios.get(`https://api.deezer.com/user/2529/artists`);
			set({ artistas: resp.data.data, loading: false });
		} catch (error) {
			set({ error: error.message, loading: false });
		}
	},
	getArtista: async (id) => {
		set({ loading: true, error: null });
		try {
			const resp = await axios.get(`https://api.deezer.com/artist/${id}`);
			set({ artista: resp.data, loading: false });
		} catch (error) {
			set({ error: error.message, loading: false });
		}
	},
    getCanciones: async (url) => {
        set({loading: true, error: null});
        console.log(url)
        try {
            const resp = await axios.get(`${url}`);
			set({ canciones: resp.data.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false })
        }
    }
    // getArtistaByName: async (query) => {
    //     set({ loading: true, error: null });
	// 	try {
	// 		const resp = await axios.get(`https://api.deezer.com/search/artist?q=${query}&limit=10`);
	// 		set({ artistas: resp.data.data, loading: false });
	// 	} catch (error) {
	// 		set({ error: error.message, loading: false });
	// 	}
    // }
}));

export default useArtistasStore;