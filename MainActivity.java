package com.example.calculadorasumas;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class MainActivity extends AppCompatActivity {

    // Declaramos los elementos de la interfaz
    EditText etNumero1, etNumero2;
    Button btnSumar;
    TextView tvResultado;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);

        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

        // Vinculamos las variables con sus respectivos IDs del XML
        etNumero1 = findViewById(R.id.etNumero1);
        etNumero2 = findViewById(R.id.etNumero2);
        btnSumar = findViewById(R.id.btnSumar);
        tvResultado = findViewById(R.id.tvResultado);

        // Programamos el evento clic del botón
        btnSumar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Verificamos que los campos no estén vacíos
                String val1 = etNumero1.getText().toString();
                String val2 = etNumero2.getText().toString();

                if (val1.isEmpty() || val2.isEmpty()) {
                    Toast.makeText(MainActivity.this, "Por favor ingresa ambos números", Toast.LENGTH_SHORT).show();
                    return;
                }

                try {
                    // Convertimos los textos a números (Double para admitir decimales)
                    double numero1 = Double.parseDouble(val1);
                    double numero2 = Double.parseDouble(val2);

                    // Realizamos la suma
                    double suma = numero1 + numero2;

                    // Mostramos el resultado en el TextView
                    tvResultado.setText("Resultado: " + suma);

                } catch (NumberFormatException e) {
                    Toast.makeText(MainActivity.this, "Introduce números válidos", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }
}