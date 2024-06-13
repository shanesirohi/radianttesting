import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      minLength: 6,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    followers: {
      type: [String],
      default: [],
    },
    following: {
      type: [String],
      default: [],
    },
    bio: {
      type: String,
      default: "",
    },
    isFrozen: {
      type: Boolean,
      default: false,
    },
    school: {
      type: String,
      enum: ["SAJS", "AMITY", "DPS"], // Enumerate allowed options
      required: true,
    },
    favoriteGenre: {
      type: String,
      default: "", // Default genre if needed
    },
    favoriteArtist: {
      type: String,
      default: "",
    },
    instagram: {
      type: String,
      default: "", // Add Instagram field
    },
    spotify: {
      type: String,
      default: "", // Add Spotify field
    },
    relationshipStatus: {
      type: String,
      default: "Single", // Default relationship status
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"], // Enumerate allowed options
      default: "Other", // Default gender
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
