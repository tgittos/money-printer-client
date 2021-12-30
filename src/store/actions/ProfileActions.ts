import {createAction} from "@reduxjs/toolkit";
import Profile, {IProfile} from "../../schemas/models/Profile";
import {profileToIProfile} from "../../schemas/models/mappers/ProfileMappers";

export interface IProfileActionArgs {
    profile: IProfile;
    authenticated: boolean;
}

function withProfileAndAuthenticationState() {
    return (p: Profile, a: boolean) => ({
        payload: {
            profile: profileToIProfile(p),
            authenticated: a
        } as IProfileActionArgs
    });
}

export const SetCurrentProfile = createAction('setProfile', withProfileAndAuthenticationState());
export const ClearCurrentProfile = createAction<void, 'clearCurrentProfile'>('clearCurrentProfile');