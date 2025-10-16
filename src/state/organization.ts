import { create } from "zustand";

interface Organization {
  id: number | null;
  name: string | null;
  slug: string | null;
  logoImage?: string | null;
  maxSeats: number | null;
  websiteUrl?: string | null;
  role: 'owner' | 'member';
  createdAt: string | null;
}

interface Member {
  id: number | null;
  name: string | null;
  email: string | null;
  avatarImage?: string | null;
  role: 'owner' | 'member';
  joinedAt: string;
}

interface Invitation {
  id: number | null;
  email: string | null;
  role: 'owner' | 'member';
  joinedAt: string;
}

interface OrganizationStore {
  organization: Organization | null;
  currentOrganization: Organization | null;
  members: Member[];
  invitedMembers: Invitation[];
  membersCache: Record<number, { members: Member[], lastFetched: number }>;
  isLoading: boolean;
  isMembersLoading: boolean;
  error: Error | null;
  fetchUserOrganizations: (token: string) => Promise<void>;
  fetchOrganizationMembers: (token: string, organizationId: number) => Promise<void>;
  setCurrentOrganization: (org: Organization) => void;
}

export const useOrganization = create<OrganizationStore>((set, get) => ({
  organization: null,
  currentOrganization: null,
  members: [],
  invitedMembers: [],
  membersCache: {},
  isLoading: false,
  isMembersLoading: false,
  error: null,

  fetchUserOrganizations: async (token: string) => {
    try {
      set({ isLoading: true, error: null });
      const organization = await fetch("https://workers.retroui.dev/organizations").then((res) => res.json());
      set({ organization, isLoading: false });
    } catch (error) {
      set({ error: error as Error, isLoading: false });
    }
  },

  fetchOrganizationMembers: async (token: string, organizationId: number) => {
    const state = get();
    const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
    const cached = state.membersCache[organizationId];
    
    // Check if we have recent cached data
    if (cached && Date.now() - cached.lastFetched < CACHE_DURATION) {
      set({ members: cached.members });
      return;
    }

    try {
      set({ isMembersLoading: true, error: null });
      const {members, invitedMembers} = await fetch(`https://workers.retroui.dev/organizations/${organizationId}/members`).then((res) => res.json());
      
      // Update cache and current members
      set({ 
        members,
        invitedMembers,
        isMembersLoading: false,
        membersCache: {
          ...state.membersCache,
          [organizationId]: {
            members,
            lastFetched: Date.now()
          }
        }
      });
    } catch (error) {
      set({ error: error as Error, isMembersLoading: false });
    }
  },

  setCurrentOrganization: (org: Organization) => {
    set({ currentOrganization: org });
  },
}));