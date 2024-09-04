import { createContext } from 'react';
import { createClient } from '@supabase/supabase-js';
import PropTypes from 'prop-types';

const supabaseUrl = "https://cnvfpzeheaepjtxxoxgi.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNudmZwemVoZWFlcGp0eHhveGdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUyNTkyMDgsImV4cCI6MjA0MDgzNTIwOH0.KKFTlomCraxkC86gfKcmLhEx_beF9oquqFNob5W25-I";
const supabase = createClient(supabaseUrl, supabaseKey);

export const SupabaseContext = createContext(supabase);

export const SupabaseProvider = ({ children }) => {
    return (
        <SupabaseContext.Provider value={supabase}>
            {children}
        </SupabaseContext.Provider>
    );
};

SupabaseProvider.propTypes = {
    children: PropTypes.node.isRequired,
};