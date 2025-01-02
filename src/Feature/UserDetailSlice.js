import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// create post
export const fecthCreateData = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    console.log("data :" + data);
    const response = await fetch(
      "https://673468a4a042ab85d11a07c1.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// read post
export const fecthShowData = createAsyncThunk("fecthShowData", async () => {
  const response = await fetch(
    "https://673468a4a042ab85d11a07c1.mockapi.io/crud"
  );
  return response.json();
});

//delete data in  database
export const fecthDeleteData = createAsyncThunk(
  "fecthDeleteData",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://673468a4a042ab85d11a07c1.mockapi.io/crud/${id}`,
      { method: "DELETE" }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//for update

export const fecthUpdateData = createAsyncThunk(
  "fecthUpdateData",
  async (data, { rejectWithValue }) => {
    console.log("Updated data :" + data.id);
    const response = await fetch(
      `https://673468a4a042ab85d11a07c1.mockapi.io/crud/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const UserCreateSlice = createSlice({
  name: "Crud",
  initialState: {
    user: [
      {
        id: 1,
        name: "name 1",
        email: "email 1",
        age: "age 1",
        gender: "West",
      },
    ],
    loading: false,
    error: false,
    searchData: [],
  },

  reducers: {
    searchUser: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: (builder) => {
    // create in data base(mok api)
    builder.addCase(fecthCreateData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fecthCreateData.fulfilled, (state, action) => {
      state.loading = false;
      state.user.push(action.payload);
    });

    builder.addCase(fecthCreateData.rejected, (state, action) => {
      console.log("error" + action.payload);
      state.error = true;
    });

    // read simple

    builder.addCase(fecthShowData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fecthShowData.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });

    builder.addCase(fecthShowData.rejected, (state, action) => {
      console.log("error" + action.payload);
      state.error = true;
    });

    //delete data in database(mok api)
    builder.addCase(fecthDeleteData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fecthDeleteData.fulfilled, (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.user = state.user.filter((val) => val.id !== id);
      }
    });

    builder.addCase(fecthDeleteData.rejected, (state, action) => {
      console.log("error" + action.payload);
      state.error = true;
    });

    // Update data base(mok api)
    builder.addCase(fecthUpdateData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fecthUpdateData.fulfilled, (state, action) => {
      state.loading = false;

      state.user = state.user.map((val) =>
        val.id === action.payload.id ? action.payload : val
      );
    });

    builder.addCase(fecthUpdateData.rejected, (state, action) => {
      console.log("error" + action.payload);
      state.error = true;
    });
  },
});

export const { searchUser } = UserCreateSlice.actions;
export default UserCreateSlice.reducer;
