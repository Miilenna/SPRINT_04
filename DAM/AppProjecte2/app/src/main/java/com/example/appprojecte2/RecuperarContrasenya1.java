package com.example.appprojecte2;

import android.os.Bundle;
import android.widget.Button;
import androidx.activity.EdgeToEdge;
import android.content.Intent;
import android.view.View;
import android.widget.ImageButton;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class RecuperarContrasenya1 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_recuperar_contrasenya1);
        Button rP = findViewById(R.id.rP);
        ImageButton bB = findViewById(R.id.backButton);

        bB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(RecuperarContrasenya1.this, MainActivity.class);
                startActivity(intent);
            }
        });
        rP.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(RecuperarContrasenya1.this, RecuperarContrasenya2.class);
                startActivity(intent);
            }
        });
    }
}