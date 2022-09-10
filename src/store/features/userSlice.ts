import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updateProfile,
  UserCredential,
} from "firebase/auth";
import { UserData } from "../../types";
import { transformUserCredential } from "../../services";
import { getFirebaseMessageError } from "../../utils";

interface UserState {
  isLoading: boolean;
  error: string | null;
  result: UserData | null;
}

const initialState: UserState = {
  isLoading: false,
  error: null,
  result: null,
};

type UserRegData = {
  email: string;
  password: string;
  name?: string;
  handleModal?: () => void;
};

export const createUser = createAsyncThunk<
  UserCredential,
  UserRegData,
  { rejectValue: string }
>(
  "user/createUser",
  async (
    { email, password, name, handleModal }: UserRegData,
    { rejectWithValue }
  ) => {
    const auth = getAuth();
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: name });
      }
      if (handleModal) {
        handleModal();
      }
      return response;
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(firebaseError.code);
    }
  }
);

export const logInUser = createAsyncThunk<
  UserCredential | null,
  UserRegData,
  { rejectValue: string }
>(
  "user/logInUser",
  async ({ email, password }: UserRegData, { rejectWithValue }) => {
    const auth = getAuth();
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return response.user ? response : null;
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(firebaseError.code);
    }
  }
);

export const logOutUser = createAsyncThunk<
  void,
  undefined,
  { rejectValue: string }
>("user/logOutUser", async (_, { rejectWithValue }) => {
  const auth = getAuth();
  try {
    await signOut(auth);
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(firebaseError.code);
  }
});

export const changeEmail = createAsyncThunk<
  void,
  string,
  { rejectValue: string }
>("user/changeEmail", async (newEmail, { rejectWithValue }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    try {
      return await updateEmail(user, newEmail);
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(firebaseError.code);
    }
  }
});

export const changeName = createAsyncThunk<
  void,
  string,
  { rejectValue: string }
>("user/changeName", async (newName, { rejectWithValue }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    try {
      return await updateProfile(user, { displayName: newName });
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(firebaseError.code);
    }
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.result = transformUserCredential(payload);
    });
    builder.addCase(createUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.error = getFirebaseMessageError(payload);
      }
    });
    builder.addCase(logInUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(logInUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (payload?.user.uid) {
        state.result = transformUserCredential(payload);
      } else {
        state.result = null;
      }
    });
    builder.addCase(logInUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.error = getFirebaseMessageError(payload);
      }
    });
    builder.addCase(logOutUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(logOutUser.fulfilled, (state) => {
      state.isLoading = false;
      state.result = null;
    });
    builder.addCase(logOutUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.error = getFirebaseMessageError(payload);
      }
    });
    builder.addCase(changeEmail.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(changeEmail.fulfilled, (state, payload) => {
      state.isLoading = false;
      if (state.result) {
        state.result.email = payload.meta.arg;
      }
    });
    builder.addCase(changeEmail.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.error = getFirebaseMessageError(payload);
      }
    });
    builder.addCase(changeName.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(changeName.fulfilled, (state, payload) => {
      state.isLoading = false;
      if (state.result) {
        state.result.displayName = payload.meta.arg;
      }
    });
    builder.addCase(changeName.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.error = getFirebaseMessageError(payload);
      }
    });
    // builder.addMatcher(isPendingAction, (state) => {
    //   state.isLoading = true;
    //   state.error = null;
    // })
  },
});

export default userSlice.reducer;
