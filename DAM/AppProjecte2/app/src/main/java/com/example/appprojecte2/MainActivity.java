package com.example.appprojecte2;


import android.os.Bundle;
import android.widget.Button;
import androidx.activity.EdgeToEdge;
import android.content.Intent;
import android.view.View;
import android.widget.ImageButton;

import android.net.Uri;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        Button fP = findViewById(R.id.fP);
        Button btnLogin = findViewById(R.id.btnLogin);
        Button btnAdmin = findViewById(R.id.btnAdmin);
        Button btnProfessor = findViewById(R.id.btnProfessor);
        ImageButton google = findViewById(R.id.googleLogo);
        google.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String url = "https://accounts.google.com/signin";
                Intent intent = new Intent(Intent.ACTION_VIEW);
                intent.setData(Uri.parse(url));
                startActivity(intent);
            }
        });
        fP.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, RecuperarContrasenya1.class);
                startActivity(intent);
            }
        });
        btnLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, PaginaPrincipalAlumne.class);
                startActivity(intent);
            }
        });
        btnAdmin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, PaginaPrincipalAdmin.class);
                startActivity(intent);
            }
        });
        btnProfessor.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, PaginaPrincipalProf.class);
                startActivity(intent);
            }
        });

    }
}