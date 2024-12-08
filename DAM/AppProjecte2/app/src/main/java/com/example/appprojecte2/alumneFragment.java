package com.example.appprojecte2;

import android.content.Intent;
import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

public class alumneFragment extends Fragment {

    public alumneFragment() {
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_alumne, container, false);

        view.findViewById(R.id.aB).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getActivity(), PaginaPrincipalAlumne.class);
                startActivity(intent);
            }
        });
        view.findViewById(R.id.lD).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getActivity(), DadesAlumne.class);
                startActivity(intent);
            }
        });
        view.findViewById(R.id.sE).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getActivity(), SafataEntradaAlumne.class);
                startActivity(intent);
            }
        });
        return view;
    }
}