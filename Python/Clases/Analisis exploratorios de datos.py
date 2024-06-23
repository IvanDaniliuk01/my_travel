#Clase 1 y 2
import pandas as pd

# Define la ruta completa al archivo CSV
archivo_csv = r'C:\Users\idaniliuk\OneDrive - ITBA\Estudio por fuera\Python\train.csv'

# Carga el archivo CSV en un DataFrame
df_train = pd.read_csv(archivo_csv)

# Muestra las primeras filas del DataFrame para verificar que se ha cargado correctamente
print(df_train.head())

#SHAPE: muestra la forma/dimensión de nuetra tabla
num_filas, num_columnas = df_train.shape
print(f"El DataFrame tiene {num_filas} filas y {num_columnas} columnas.")

# Usar .info() para obtener un resumen del DataFrame
print(df_train.info())

#Como ver columnas
print(df_train[['Id', 'SalePrice']])

#Promedios -> mean
print(df_train['SalePrice'].mean())

#Describe te da información estadística de todas las columnas
print(df_train.describe())

#Clase 3 a 8
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
from scipy.stats import norm
from sklearn.preprocessing import StandardScaler
from scipy import stats
import warnings

# Define la ruta completa al archivo CSV
archivo_csv = r'C:\Users\idaniliuk\OneDrive - ITBA\Estudio por fuera\Python\Clases\train.csv'

# Carga el archivo CSV en un DataFrame
df_train = pd.read_csv(archivo_csv)

df_SalePrice = df_train['SalePrice']
print(df_SalePrice.describe())
sns.displot(df_SalePrice, kde = True)
plt.show() # No tiene comportamiento normal

print(df_SalePrice.skew())
print(df_SalePrice.kurt())

var = 'GrLivArea'
data = pd.concat([df_train['SalePrice'],df_train[var]], axis=1)
print(data.head(20))
data.plot.scatter(x = var, y = 'SalePrice', ylim = (0,800000))
plt.show() #Relación lineal

var2 = 'TotalBsmtSF'
data2 = pd.concat([df_train['SalePrice'],df_train[var2]], axis=1)
print(data.head(20))
data2.plot.scatter(x = var2, y = 'SalePrice', ylim = (0,800000))
plt.show() #Relación lineal más dudosa

# Relación OverallQual vs SalePrice
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
from scipy.stats import norm
from sklearn.preprocessing import StandardScaler
from scipy import stats
import warnings

archivo_csv = r'C:\Users\idaniliuk\OneDrive - ITBA\Estudio por fuera\Python\Clases\train.csv'
df_train = pd.read_csv(archivo_csv)

var3 = 'OverallQual'
unique_qualities = sorted(df_train[var3].unique())
data3 = pd.concat([df_train['SalePrice'],df_train[var3]], axis = 1)
sns.set(style="whitegrid")
plt.figure(figsize=(12, 6))
boxplot = sns.boxplot(x=var3, y = 'SalePrice', data = data3)
boxplot.axis(ymin= 0, ymax= 800000)
boxplot.set_title('Relación entre la Calidad General de las Casas y el Precio de Venta', fontsize=16)
boxplot.set_xlabel('Calidad General', fontsize=14)
boxplot.set_ylabel('Precio de Venta ($)', fontsize=14)
plt.xticks(fontsize=12)
plt.yticks(fontsize=12)
plt.show()

# Relación YearBuilt vs SalePrice
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
from scipy.stats import norm
from sklearn.preprocessing import StandardScaler
from scipy import stats
import warnings

archivo_csv = r'C:\Users\idaniliuk\OneDrive - ITBA\Estudio por fuera\Python\Clases\train.csv'
df_train = pd.read_csv(archivo_csv)

var4 = 'YearBuilt'
data4 = pd.concat([df_train['SalePrice'],df_train[var4]], axis = 1)
sns.set(style = "whitegrid")
plt.figure(figsize=(14,20))
boxplot2 = sns.boxplot(x = var4, y = 'SalePrice', data = data4)
boxplot2.axis(ymin = 0, ymax = 800000)
boxplot2.set_title('Relación entre el año de construcción de las Casas y el Precio de Venta', fontsize=14)
boxplot2.set_xlabel('Año de construcción', fontsize=12)
boxplot2.set_ylabel('Precio de Venta ($)', fontsize=12)
plt.xticks(rotation = 90,fontsize=12)
plt.yticks(fontsize=12)
plt.show()

# Heatmap de todas las variables númericas
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
from scipy.stats import norm
from sklearn.preprocessing import StandardScaler
from scipy import stats
import warnings

archivo_csv = r'C:\Users\idaniliuk\OneDrive - ITBA\Estudio por fuera\Python\Clases\train.csv'
df_train = pd.read_csv(archivo_csv)

non_numeric_columns = df_train.select_dtypes(exclude=[np.number]).columns

print("Columnas no numéricas:")
print(non_numeric_columns)

# Suponiendo que df es tu DataFrame original
# Seleccionar solo las columnas numéricas
df_numeric = df_train.select_dtypes(include=[np.number])

# Calcular la matriz de correlación
corr_matrix = df_numeric.corr()

# Configurar el tamaño de la figura
plt.figure(figsize=(10, 8))  # Puedes ajustar el tamaño de la figura según tus necesidades

# Crear un heatmap con la matriz de correlación
sns.heatmap(corr_matrix, fmt=".2f", cmap='coolwarm', cbar=True, square=True)

# Añadir título y etiquetas si es necesario
plt.show()

# Calculando TOP 10 coeficientes de correlación de la variable SalePrice y su Heatmap correspondiente
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
from scipy.stats import norm
from sklearn.preprocessing import StandardScaler
from scipy import stats
import warnings


archivo_csv = r'C:\Users\idaniliuk\OneDrive - ITBA\Estudio por fuera\Python\Clases\train.csv'
df_train = pd.read_csv(archivo_csv)

def top_correlated_features(df_train, target='SalePrice', num_top_features=10):
    # Filtrar solo las columnas numéricas
    numeric_df = df_train.select_dtypes(include=['int64', 'float64'])

    # Imprimir las primeras filas para verificar los datos antes del cálculo
    print("Primeras filas del DataFrame numérico:")
    print(numeric_df.head())

    # Manejar posibles valores nulos antes de calcular la correlación
    numeric_df = numeric_df.fillna(numeric_df.mean())

    # Calcular la matriz de correlación para las columnas numéricas
    corr_matrix = numeric_df.corr()
    
    # Enfocarse en las correlaciones con la variable objetivo
    target_corr = corr_matrix[target]
    
    # Ordenar las correlaciones por valor absoluto en orden descendente y quitar la variable objetivo
    top_correlations = target_corr.drop(target).abs().sort_values(ascending=False).head(num_top_features)
    
    return top_correlations

# Llamando a la función y almacenando el resultado
top_features = top_correlated_features(df_train, 'SalePrice', 10)

# Imprimir las características más correlacionadas
print(top_features)

def plot_correlation_heatmap(df, top_features, target):
    # Seleccionar solo las columnas de las características más correlacionadas más la variable objetivo
    selected_columns = top_features.index.tolist() + [target]  # Asegurarse de que 'target' no está ya en el índice
    selected_columns = list(set(selected_columns))  # Elimina duplicados, en caso de que target ya esté en top_features

    # Crear un nuevo DataFrame solo con las columnas seleccionadas
    df_filtered = df[selected_columns]

    # Calcular la matriz de correlación del nuevo DataFrame
    corr_matrix = df_filtered.corr()

    # Ordenar la matriz de correlación según los valores de correlación con 'SalePrice'
    sorted_corr = corr_matrix.sort_values(by=target, ascending=False, key=lambda col: abs(col))
    sorted_corr = sorted_corr[sorted_corr.index]

    # Crear el heatmap con Seaborn
    plt.figure(figsize=(12, 10))
    heatmap = sns.heatmap(sorted_corr, annot=True, fmt=".2f", cmap='coolwarm', square=True, cbar=True, linewidths=.5)
    heatmap.set_title('Heatmap de Correlación')

    plt.show()

plot_correlation_heatmap(df_train, top_features, 'SalePrice')

# Pairplot entre SalePrice y otros
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
from scipy.stats import norm
from sklearn.preprocessing import StandardScaler
from scipy import stats
import warnings


archivo_csv = r'C:\Users\idaniliuk\OneDrive - ITBA\Estudio por fuera\Python\Clases\train.csv'
df_train = pd.read_csv(archivo_csv)

sns.set_style("whitegrid")
cols = ['SalePrice', 'OverallQual', 'GrLivArea', 'GarageCars', '1stFlrSF']
sns.pairplot(df_train[cols])
plt.show()

